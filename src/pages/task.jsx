import React , {useState} from 'react'
import { eye } from 'react-icons-kit/feather/eye'
import { eyeOff } from 'react-icons-kit/feather/eyeOff'

const task = () => {
  const [type, setType] = useState('password');
  const [icon, setIcon] = useState(eyeOff);
  const [state, setState] = useState({
    number: null
  });
  const onChange = (e) => {
    var val = e.target.value;
    setState({
      number: val.replace(/\W/gi, '').replace(/(.{4})/g, '$1   ')
    });
  }

  const handleToggle = (e) => {
    if (type === 'password') {
      setIcon(eye);
      setType('text');
    }
    else {
      setIcon(eyeOff);
      setType('password');
    }
    var val = e.target.value;
    setState({
      number: val.replace(/\W/gi, '').replace(/(.{4})/g, '$1   ')
    });
  }

  return (
    <div>
      <div className='input-field'>
        <input onChange={onChange} value={state.number} type={type} placeholder="Enter-Adhar-Number" />
        <span onClick={handleToggle} ><Icon icon={icon} size={18} /></span>
      </div>
    </div>
  )
}

export default task