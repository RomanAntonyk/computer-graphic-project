import { HeaderNavButton } from './HeaderNavButton'

export const NavBar = () => {

  return (
    <div className={'flex justify-end h-full'}>
            <HeaderNavButton path={'/fractal'} text={'Fractal'}/>
            <HeaderNavButton path={'/color'} text={'Color'}/>
            <HeaderNavButton path={'/transformation'} text={'Transformation'}/>
            <HeaderNavButton path={'/help'} text={'Help'}/>
    </div>
  )
}
