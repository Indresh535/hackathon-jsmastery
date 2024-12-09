This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.


Setting up a reverse proxy allows you to host the same application on multiple domains without duplicating your codebase. This ensures that all traffic to https://newdomain.com is routed to the application hosted at https://originaldomain.com, and the user remains unaware of the original domain.

Here’s a detailed step-by-step guide to setting up a reverse proxy using IIS (commonly used in ASP.NET environments):

1. Set Up the New Domain in DNS
Update your DNS configuration to point the newdomain.com to the server where you will configure the reverse proxy.
Ensure the A or CNAME records are set up for the domain and any subdomains.
2. Install and Configure IIS on the Reverse Proxy Server
Ensure IIS is installed on the server hosting newdomain.com.

Install IIS URL Rewrite and ARR Modules
Install Application Request Routing (ARR):

ARR is used for routing requests to other servers.
Download and install ARR from Microsoft’s site.
Install URL Rewrite Module:

This module helps rewrite incoming URLs and forward them to another server.
3. Set Up a New IIS Site for the New Domain
Open IIS Manager.
Right-click on Sites and select Add Website.
Configure the following:
Site Name: NewDomainSite
Physical Path: Select an empty folder (e.g., C:\inetpub\NewDomainSite).
Binding:
Type: https
Hostname: newdomain.com
Ensure you have an SSL certificate installed for newdomain.com.
4. Configure Reverse Proxy in IIS
Select the site for newdomain.com in IIS Manager.
Double-click Application Request Routing Cache.
On the right-hand pane, click Server Proxy Settings and:
Enable Proxy by checking Enable Proxy.
Click Apply.
Set Up URL Rewrite Rules
Double-click URL Rewrite for the site.
Click Add Rules in the right pane.
Select Reverse Proxy.
Enter the target (original) domain in the Inbound Rules:
Target URL: https://originaldomain.com
Ensure the rule forwards all requests to https://originaldomain.com.
Save the settings.
5. Mask the Original Domain
To ensure users only see the new domain (https://newdomain.com) in their browser:

The reverse proxy must handle all responses.
Ensure there are no redirects in the backend that point to originaldomain.com.
6. Test the Reverse Proxy
Open a browser and navigate to https://newdomain.com.
Confirm that:
The content of https://originaldomain.com is displayed.
The browser address bar shows https://newdomain.com.
7. Secure the Communication
To ensure secure and encrypted communication:

Both newdomain.com and originaldomain.com must have valid SSL certificates.
Configure IIS to enforce HTTPS-only communication.
8. Optional: Optimize for Performance
Enable caching in the ARR settings to improve performance.
Monitor the reverse proxy logs to identify potential bottlenecks.
Example Configuration:
Request URL (User): https://newdomain.com/home
Forwarded URL: https://originaldomain.com/home
Troubleshooting
If the new domain does not load:
Verify the DNS and binding configuration in IIS.
Check for firewalls blocking the traffic between the proxy server and the original domain.
If the original domain appears in the browser:
Ensure there are no absolute redirects in the original application.
Let me know if you'd like additional guidance or assistance!