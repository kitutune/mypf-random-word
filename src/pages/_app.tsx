import 'tailwindcss/tailwind.css';
import type { AppProps } from 'next/app';
import { Layout } from 'components/Layout';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className='m-0 p-0 w-full h-full'>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </div>
  );
}
export default MyApp;
