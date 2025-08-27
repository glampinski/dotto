from http.server import SimpleHTTPRequestHandler, HTTPServer
import os

PORT = 8000
WEB_DIR = os.path.join(os.path.dirname(__file__), 'public')
os.chdir(WEB_DIR)

class CustomHandler(SimpleHTTPRequestHandler):
    def end_headers(self):
        self.send_header('Cache-Control', 'no-store')
        super().end_headers()

if __name__ == '__main__':
    with HTTPServer(("0.0.0.0", PORT), CustomHandler) as httpd:
        print(f"Serving at http://localhost:{PORT}")
        httpd.serve_forever()
