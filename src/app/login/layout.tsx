import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Login Page",
  description: "login page next app",
};

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <div> env next : {process.env.base_url_api} </div>
      <div> env local : {process.env.API_URL} </div>
      <div>{children}</div>
    </div>
  );
}
