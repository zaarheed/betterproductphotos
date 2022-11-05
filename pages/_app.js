import "../styles/globals.css";
import Head from "next/head";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

function MyApp({ Component, pageProps }) {
	return (
		<QueryClientProvider client={queryClient}>
			<Head>
				<title>Bedu List | Best places to live for Muslim Nomads</title>
			</Head>
			<Component {...pageProps} />
		</QueryClientProvider>
	)
  }

export default MyApp
