// Components
import Main from '@/components/Main'
import Head from 'next/head'

// Helpers

// Types
import helpHttps from '@/helpers/helpHttp'
import type { TTools } from '@/types/apptypes'

// Mocks

interface props {
  dynamicTools: TTools
}

function App ({ dynamicTools }: props) {
  return (
    <>
      <Head>
        <title>Dev Vault</title>
      </Head>
      <Main dynamicTools={dynamicTools} />
    </>
  )
}

export default App

export async function getStaticProps () {
  const apikey = process.env.JSONBIN as string
  const dynamicTools = (await helpHttps().get('https://api.jsonbin.io/v3/b/6444893eb89b1e22998fa0ee', apikey)).record

  return {
    props: {
      dynamicTools
    },
    revalidate: 21600 // 6 hours
  }
}
