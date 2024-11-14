import Image from 'next/image'

interface MainImageSectionProps {
  image: string
}

export default function MainImageSection({image}: MainImageSectionProps) {
  return (
    <div className='relative'>
      <Image
        src={image}
        alt='Main Visual'
        className='rounded-2xl max-h-[526px] w-fill object-cover'
        layout='responsive'
        objectFit='cover'
        priority
        width={800}
        height={526}
      />
    </div>
  )
}
