import { loggedAccount } from '@/lib/actions/user.actions'
import Image from 'next/image'
import { useRouter } from 'next/navigation'


const Footer = ({ user, type = 'desktop' }: FooterProps) => {
  const router  = useRouter()

    const handleLogOut = async () => {
    const loggedOut = await loggedAccount();

    if(loggedOut) router.push('/sign-in')
  }
  return (
    <footer className="footer">
      <div className={type === 'mobile'
        ? 'footer_name_mobile'
        : 'footer_name'} >
        <p className="text-xl font-bold text-gray-700">
          {user?.firstName[0]}
        </p>
      </div>
      <div className={type === 'mobile'
        ? 'footer_email_mobile'
        : 'footer_email'} >
        <h1 className='text-14 truncate text-gray-700 font-semibold'>
          {user?.firstName}
        </h1>
        <p className="text-1 truncate font-normal text-gray-600">
          {user?.email}
        </p>
      </div>
      <div className="footer_image" onClick={handleLogOut}>
        <Image
          src='icons/logout.svg'
          fill
          alt='orson'
        />
      </div>
    </footer >
  )
}

export default Footer

function logoutAccount() {
  throw new Error('Function not implemented.');
}
