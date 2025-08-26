import Image from "next/image";
import Link from "next/link";
import { getDictionary } from "@/i18n/get-dictionary";
import { isValidLocale } from "@/i18n/settings";

export default async function Home({
  params,
}: {
  params: { lang: string };
  }) {
  const { lang } = await params;
  const locale = isValidLocale(lang) ? lang : 'en';
  const dict = await getDictionary(locale);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="relative z-10 py-24 sm:py-32">
            <div className="mx-auto max-w-2xl text-center">
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                Welcome to Our Platform
              </h1>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Build amazing applications with modern tools and technologies. 
                Get started today and see your ideas come to life.
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <Link
                  href={`/${locale}/dashboard`}
                  className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  {dict.navigation.dashboard}
                </Link>
                <Link
                  href={`/${locale}/dashboard/feed`}
                  className="text-sm font-semibold leading-6 text-gray-900"
                >
                  {dict.navigation.feed} <span aria-hidden="true">→</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80">
          <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]" />
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Everything you need to succeed
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Powerful features designed to help you build, deploy, and scale your applications.
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
              <div className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                  <div className="h-5 w-5 flex-none rounded-full bg-indigo-600" />
                  Analytics Dashboard
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">
                    Get insights into your application performance with our comprehensive analytics dashboard.
                  </p>
                  <p className="mt-6">
                    <Link
                      href={`/${locale}/dashboard/analytics`}
                      className="text-sm font-semibold leading-6 text-indigo-600"
                    >
                      {dict.navigation.analytics} <span aria-hidden="true">→</span>
                    </Link>
                  </p>
                </dd>
              </div>
              <div className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                  <div className="h-5 w-5 flex-none rounded-full bg-indigo-600" />
                  Team Management
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">
                    Manage your team efficiently with role-based access control and collaboration tools.
                  </p>
                  <p className="mt-6">
                    <Link
                      href={`/${locale}/dashboard/settings`}
                      className="text-sm font-semibold leading-6 text-indigo-600"
                    >
                      {dict.navigation.settings} <span aria-hidden="true">→</span>
                    </Link>
                  </p>
                </dd>
              </div>
              <div className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                  <div className="h-5 w-5 flex-none rounded-full bg-indigo-600" />
                  Real-time Feed
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">
                    Stay connected with your team through our real-time activity feed and communication tools.
                  </p>
                  <p className="mt-6">
                    <Link
                      href={`/${locale}/dashboard/feed`}
                      className="text-sm font-semibold leading-6 text-indigo-600"
                    >
                      {dict.navigation.feed} <span aria-hidden="true">→</span>
                    </Link>
                  </p>
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Ready to get started?
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-600">
              Join thousands of developers who are already building amazing applications with our platform.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                href={`/${locale}/dashboard`}
                className="rounded-md bg-gray-900 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-gray-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900"
              >
                Get started
              </Link>
              <Link
                href="https://nextjs.org/docs"
                className="text-sm font-semibold leading-6 text-gray-900"
                target="_blank"
                rel="noopener noreferrer"
              >
                Learn more <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="py-12">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="col-span-1 md:col-span-2">
                <Image
                  className="h-8 w-auto"
                  src="/next.svg"
                  alt="Logo"
                  width={100}
                  height={24}
                />
                <p className="mt-4 text-sm text-gray-400">
                  Building the future of web development with modern tools and technologies.
                </p>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-white">Product</h3>
                <ul className="mt-4 space-y-2 text-sm text-gray-400">
                  <li><Link href={`/${locale}/dashboard`} className="hover:text-white">Dashboard</Link></li>
                  <li><Link href={`/${locale}/dashboard/analytics`} className="hover:text-white">Analytics</Link></li>
                  <li><Link href={`/${locale}/dashboard/feed`} className="hover:text-white">Feed</Link></li>
                </ul>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-white">Support</h3>
                <ul className="mt-4 space-y-2 text-sm text-gray-400">
                  <li><Link href={`/${locale}/dashboard/settings`} className="hover:text-white">Settings</Link></li>
                  <li><a href="https://nextjs.org/docs" className="hover:text-white" target="_blank" rel="noopener noreferrer">Documentation</a></li>
                  <li><a href="https://github.com/vercel/next.js" className="hover:text-white" target="_blank" rel="noopener noreferrer">GitHub</a></li>
                </ul>
              </div>
            </div>
            <div className="mt-8 border-t border-gray-800 pt-8">
              <p className="text-sm text-gray-400 text-center">
                © 2024 Your Company. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
