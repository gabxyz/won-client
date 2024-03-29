import { Favorite, FavoriteBorder } from '@styled-icons/material-outlined'
import Button, { ButtonProps } from 'components/Button'
import Spinner from 'components/Spinner'
import { useWishlist } from 'hooks/use-wishlist'
import { useSession } from 'next-auth/client'
import { useState } from 'react'

type WishlistButtonProps = {
  id: string
  hasText?: boolean
} & Pick<ButtonProps, 'size' | 'minimal'>

const WishlistButton = ({
  id,
  hasText,
  size = 'small',
  minimal = true
}: WishlistButtonProps) => {
  const [session] = useSession()

  const [loading, setLoading] = useState(false)

  const { isInWishlist, addToWishlist, removeFromWishlist } = useWishlist()

  const ButtonText = isInWishlist(id)
    ? 'Remove from Wishlist'
    : 'Add to Wishlist'

  const handleClick = async () => {
    setLoading(true)
    isInWishlist(id) ? await removeFromWishlist(id) : await addToWishlist(id)
    setLoading(false)
  }

  if (!session) return null

  return (
    <Button
      icon={
        loading ? (
          <Spinner />
        ) : isInWishlist(id) ? (
          <Favorite aria-label={ButtonText} />
        ) : (
          <FavoriteBorder aria-label={ButtonText} />
        )
      }
      minimal={minimal}
      size={size}
      onClick={handleClick}
    >
      {hasText && ButtonText}
    </Button>
  )
}

export default WishlistButton
