import "./globals.scss";
import Layout from "@/components/Layout";


export const metadata = {
  title: "Ankur Portfolio",
  description: "personal website for showcasing skills",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="dark">
      <Layout>
      {children}
      </Layout>
      </body>
    </html>
  );
}
