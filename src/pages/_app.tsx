import 'tailwindcss/tailwind.css';
import type { AppProps } from 'next/app';
import { Door } from 'components/Door/Door';
import { Layout } from 'components/Layout';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className='m-0 p-0 w-full h-full'>
      <Door>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Door>
    </div>
  );
}
export default MyApp;
