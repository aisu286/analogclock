import { serveDir } from '@std/http/file_server'

Deno.serve({ port: 8080, hostname: '0.0.0.0' }, (req) => {
  const url = new URL(req.url)
  const pathname = url.pathname
  console.log(pathname)
  console.log(url.searchParams.get("bg"));

  return serveDir(req, {
    fsRoot: 'public',
    urlRoot: '',
    showDirListing: true,
    enableCors: true,
  })
})