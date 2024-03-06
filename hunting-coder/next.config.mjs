/** @type {import('next').NextConfig} */
const nextConfig = {
  // As the next export commamnd is depreceated so to enable a static export:
  // output: "export",
  // When build will be generated the files will be converted to folders so that routes work without ".html" extension.
  trailingSlash: true,
};

export default nextConfig;
