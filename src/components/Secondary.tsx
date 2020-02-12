import * as React from 'react';

export interface ISecondaryProps {
  rating: object;
}
export const Secondary = (props: ISecondaryProps) => {
  React.useEffect(() => {

  }, []);

  return (
    <div>
      Your rating is {props.rating}! Thankyou...
    </div>
  )
}



