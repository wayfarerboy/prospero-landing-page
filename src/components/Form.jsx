import React, { useRef, useEffect, useState } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';

import strings from '../helpers/lang.js';

const useStyles = makeStyles(theme => ({
  wrapper: {
    maxWidth: 640,
  },
}));

const Form = ({ formId }) => {

  const formRef = useRef();
  const classes = useStyles();
  const { form: { button } } = strings[formId];

  const [formElements, setFormElements] = useState([]);

  const onChange = node => (ev) => node.value = ev.target.value;

  useEffect(() => {
    const observer = new MutationObserver((_, obs) => {
      setFormElements(Array.from(formRef.current
        .querySelectorAll('input,select,button'))
        .filter(node => node.type !== 'hidden')
        .map(node => ({
          type: node.type,
          key: node.name,
          defaultValue: node.value,
          required: node.dataset.required === '1',
          onClick: node.type === 'submit' ? () => node.click() : null,
          onChange: node.type !== 'submit' ? onChange(node) : null,
          label: node.placeholder,
          autoComplete: 'off',
        })));
      obs.disconnect();
    });
    observer.observe(formRef.current, { childList: true });
    window.form_id = formId;
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = '//uk7.sprint-campus.co.uk/assets/application/js/formgen.js';
    document.body.appendChild(script);
    return () => {
      window.form_id = null;
      document.body.removeChild(script);
    };
  }, [formRef]);

  return (
    <div className={classes.wrapper}>
      <div ref={formRef}>
        <div id={`form_${formId}`} />
      </div>
      { formElements.map(props => props.onClick ?
        <Button {...props} /> :
        <TextField {...props} />
      ) }
      { !!formElements.length && <Typography variant="caption">
        By clicking the {button} button you agree we may process your data in accordance with our <Link color="secondary" href="https://prospero.digital/policies/qiQdqu4cmFgurhCLE" target="_blank">privacy policy</Link>, and provide us with consent to send you email marketing in the future. You don't have to provide consent to our emails, and you can still read the free report without completing the form and clicking <Link color="secondary" href="mailto:paul.sutton@candt.org">here.</Link>
      </Typography> }
    </div>
  );
};

Form.displayName = 'Form';

export default Form;
