import "./globals.scss";
import Layout from "@/components/Layout";


export const metadata = {
  title: "Ankur Portfolio",
  description: "personal website for showcasing skills",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <script async src="https://www.googletagmanager.com/gtag/js?id=G-ZS6ZB7LYJC"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-ZS6ZB7LYJC');
</script>
      <body className="dark">
      <Layout>
      {children}
      </Layout>
      </body>
    </html>
  );
}
