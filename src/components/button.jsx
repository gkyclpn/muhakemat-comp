import { Button } from '@mantine/core';

export default function Buttons({leftIcon = null, variant = 'filled', color = 'grape', name, click}) {
  return (
    <Button variant={variant} color={variant === 'filled' || variant === 'light' ? color : ''} onClick={() => {click()}}>
      {name}
    </Button>
  );
}