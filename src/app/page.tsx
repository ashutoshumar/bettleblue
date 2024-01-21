import Image from 'next/image'
import { HeroSection,Service,BigNFTSilder,Subscribe,Title,Category,Filter, NftCard, Collection } from '@/components/component.index'
export default function Home() {
  return (
    
      <div >
       <HeroSection/>
       <Service/>
       <BigNFTSilder/>
       <Title
        heading="New Collection"
        paragraph="Discover the most outstanding NFTs in all topics of life."
      />
      <Collection />
       <Title
        heading="Featured NFTs"
        paragraph="Discover the most outstanding NFTs in all topics of life."
      />
      <Filter />
      <NftCard/>
       <Title
        heading="Browse by category"
        paragraph="Explore the NFTs in the most featured categories."
      />
      <Category/>
       <Subscribe/>
      </div>
    
  )
}
