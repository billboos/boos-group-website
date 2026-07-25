import fs from 'fs';
import path from 'path';

// Feeds the News section from William Boos's public Bluesky profile, using
// the AT Protocol's unauthenticated public AppView - no API key needed.
// Re-run on every `npm run build`, so Netlify picks up new posts on each
// deploy. See CLAUDE.md for how to trigger a rebuild between deploys if
// posting cadence needs the site to refresh without a code push.
const HANDLE = 'billboos.bsky.social';
const FEED_URL = `https://public.api.bsky.app/xrpc/app.bsky.feed.getAuthorFeed?actor=${HANDLE}&limit=20&filter=posts_no_replies`;
const NEWS_DIR = path.join(process.cwd(), 'src', 'content', 'news');
const MAX_ITEMS = 8;

function cleanString(str) {
  return (str || '').replace(/\r\n/g, '\n').trim();
}

function titleFrom(text) {
  const firstLine = cleanString(text).split('\n')[0];
  if (firstLine.length <= 90) return firstLine;
  const cut = firstLine.slice(0, 90);
  const lastSpace = cut.lastIndexOf(' ');
  return `${cut.slice(0, lastSpace > 40 ? lastSpace : 90)}…`;
}

function slugify(s) {
  return s
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .slice(0, 40);
}

async function importBluesky() {
  if (!fs.existsSync(NEWS_DIR)) fs.mkdirSync(NEWS_DIR, { recursive: true });

  let feed;
  try {
    const res = await fetch(FEED_URL);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const json = await res.json();
    feed = json.feed || [];
  } catch (err) {
    console.warn(`Warning: could not fetch Bluesky feed (${err.message}). Leaving existing news entries untouched.`);
    return;
  }

  // Drop reposts - only show William's own original posts.
  const posts = feed
    .filter((item) => !item.reason)
    .map((item) => item.post)
    .filter(Boolean)
    .slice(0, MAX_ITEMS);

  if (posts.length === 0) {
    console.warn('Warning: Bluesky feed returned no original posts. Leaving existing news entries untouched.');
    return;
  }

  // Regenerate the bsky-sourced entries fresh each run so deleted/edited
  // posts don't linger; files not prefixed bsky- (hand-written entries, if
  // any get added later) are left alone.
  for (const f of fs.readdirSync(NEWS_DIR)) {
    if (f.startsWith('bsky-')) fs.unlinkSync(path.join(NEWS_DIR, f));
  }

  let count = 0;
  for (const post of posts) {
    const text = cleanString(post.record?.text);
    if (!text) continue;
    const createdAt = post.record?.createdAt;
    const date = createdAt ? new Date(createdAt).toISOString().slice(0, 10) : '';
    const rkey = post.uri.split('/').pop();
    const link = `https://bsky.app/profile/${HANDLE}/post/${rkey}`;
    const title = titleFrom(text);
    const filename = `bsky-${date}-${slugify(title) || rkey}.md`;

    const frontmatter = [
      '---',
      `title: "${title.replace(/"/g, '\\"')}"`,
      `date: ${date}`,
      `summary: "${text.replace(/"/g, '\\"').replace(/\n/g, ' ')}"`,
      `link: "${link}"`,
      '---',
      '',
      text,
    ].join('\n');

    fs.writeFileSync(path.join(NEWS_DIR, filename), frontmatter);
    count++;
  }

  console.log(`Imported ${count} post(s) from @${HANDLE} on Bluesky.`);
}

await importBluesky();
