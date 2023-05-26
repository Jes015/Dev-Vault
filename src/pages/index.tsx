// Components
import Main from '@/components/main'
import Head from 'next/head'

// Helpers

// Types
import type { TTools } from '@/types/apptypes'

// Mocks
import mockTools from '@/mocks/tools.json'

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
  console.log(apikey)
  const dynamicTools = mockTools // (await helpHttps().get('https://api.jsonbin.io/v3/b/6444893eb89b1e22998fa0ee', apikey)).record

  return {
    props: {
      dynamicTools
    },
    revalidate: 21600 // 6 hours
  }
}
