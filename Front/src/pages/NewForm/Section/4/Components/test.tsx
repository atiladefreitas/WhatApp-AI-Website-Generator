import * as React from 'react';
import { styled } from '@mui/material/styles';
import FormGroup from '@mui/material/FormGroup';
import Switch, { SwitchProps } from '@mui/material/Switch';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { handleSubmit } from '../../../Utils/mongoReq';
import { StyledButton } from '../../../../../global/Button';
import { BtnContainer } from './Switch.style';

const IOSSwitch = styled((props: SwitchProps) => (
  <Switch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />
))(({ theme }) => ({
  width: 42,
  height: 26,
  padding: 0,
  '& .MuiSwitch-switchBase': {
    padding: 0,
    margin: 2,
    transitionDuration: '300ms',
    '&.Mui-checked': {
      transform: 'translateX(16px)',
      color: '#fff',
      '& + .MuiSwitch-track': {
        backgroundColor: theme.palette.mode === 'dark' ? '#2ECA45' : '#65C466',
        opacity: 1,
        border: 0,
      },
      '&.Mui-disabled + .MuiSwitch-track': {
        opacity: 0.5,
      },
    },
    '&.Mui-focusVisible .MuiSwitch-thumb': {
      color: '#33cf4d',
      border: '6px solid #fff',
    },
    '&.Mui-disabled .MuiSwitch-thumb': {
      color:
        theme.palette.mode === 'light'
          ? theme.palette.grey[100]
          : theme.palette.grey[600],
    },
    '&.Mui-disabled + .MuiSwitch-track': {
      opacity: theme.palette.mode === 'light' ? 0.7 : 0.3,
    },
  },
  '& .MuiSwitch-thumb': {
    boxSizing: 'border-box',
    width: 22,
    height: 22,
  },
  '& .MuiSwitch-track': {
    borderRadius: 26 / 2,
    backgroundColor: theme.palette.mode === 'light' ? '#E9E9EA' : '#39393D',
    opacity: 1,
    transition: theme.transitions.create(['background-color'], {
      duration: 500,
    }),
  },
}));

interface ISwitchProps {
  userID: string | undefined;
  currentValue?: string | undefined;

  toast: (value: boolean | undefined) => void;
}

export default function CustomizedSwitches({
  userID,
  currentValue,
  toast,
}: ISwitchProps) {
  const [checked, setChecked] = React.useState<boolean>();
  const [checkedValue, setCheckedValue] = React.useState<string>('');

  const [btnVisible, setBtnVisible] = React.useState<boolean>(false);

  React.useEffect(() => {
    if (currentValue) {
      setChecked(currentValue == 'off' ? false : true);

      handleChange();
    }
  }, [currentValue]);

  const handleChange = () => {
    setChecked(!checked);
    setBtnVisible(true);

    handleCheckedValue();
  };

  const handleCheckedValue = () => {
    // se true = off
    // se false = on
    if (checked == true) {
      setCheckedValue('off');
    } else {
      setCheckedValue('on');
    }
  };

  const handleFormSubmit = React.useCallback(
    async (event: any) => {
      event.preventDefault();

      const success = await handleSubmit(
        [
          {
            field: 'isFourthSecVisible',
            value: checkedValue,
          },
        ],
        userID
      );

      toast(success);
      setCheckedValue('');
      setBtnVisible(false);
    },
    [checkedValue, userID]
  );

  return (
    <form onSubmit={handleFormSubmit}>
      <FormGroup sx={{ width: '100%', display: 'flex', alignItems: 'center' }}>
        <Stack direction={'row'} spacing={1} alignItems={'center'}>
          <Typography>Off</Typography>
          <IOSSwitch sx={{ m: 1 }} checked={checked} onChange={handleChange} />
          <Typography>On</Typography>
        </Stack>

        <BtnContainer display={btnVisible ? 'flex' : 'none'}>
          <StyledButton
            children={`Confirmar: ${
              checkedValue == 'on' ? 'mostrar' : 'esconder'
            } sessão`}
            w="larger"
            h="3rem"
            mt="1rem"
            type="submit"
          />
        </BtnContainer>
      </FormGroup>
    </form>
  );
}
