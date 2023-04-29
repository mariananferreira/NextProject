import { logo } from '@/images/logo2.png'
import Image from 'next/image'



export function Logo(props) {
  return (
    <Image
    className="h-8 w-30"
    src={logo}
    alt=""
    priority
  />
  
)
}
