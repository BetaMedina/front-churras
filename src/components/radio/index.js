import React from 'react';

import { Input,RadioWrapper,Mark,Label } from './styles';

function Radio({children,name}) {
  return (
    <RadioWrapper>
      <Label>
        <Input name={name} type="checkbox" />
        <Mark />
        {children}
      </Label>
    </RadioWrapper>
  );
}

export default Radio;