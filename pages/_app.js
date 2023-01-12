import "../styles/globals.css";
import Head from "next/head";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { PROJECT_NAME } from "@/constants/strings";

const queryClient = new QueryClient();

function MyApp({ Component, pageProps }) {
	return (
		<QueryClientProvider client={queryClient}>
			<Head>
				<title>{PROJECT_NAME} | Don't build a business. Build a brand.</title>
			</Head>
			<Component {...pageProps} />
		</QueryClientProvider>
	)
  }

export default MyApp

