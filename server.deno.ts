import { serveDir } from '@std/http/file_server'

Deno.serve({ port: 8080, hostname: '0.0.0.0' }, (req) => {
  const pathname = new URL(req.url).pathname
  console.log(pathname)

  return serveDir(req, {
    fsRoot: 'public',
    urlRoot: '',
    showDirListing: true,
    enableCors: true,
  })
})