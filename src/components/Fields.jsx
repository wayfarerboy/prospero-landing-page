import React, { useState } from 'react';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';

import Field from './Field.jsx';
import strings from '../helpers/lang.js';

const Fields = ({ formRef, formId }) => {
  const { button } = strings[formId];
  const requiredList = [];

  const setSubmitting = useState(false)[1];
  const [valid, setValid] = useState(false);
  const [values, setValues] = useState([]);

  const onClick = node => () => {
    if (valid) {
      setSubmitting(true);
      node.click();
    }
  };

  const onChange = (node, index) => (ev) => {
    node.value = ev.target.value;
    if (index > -1) {
      const newValues = [...values];
      newValues[index] = ev.target.value;
      setValid(newValues.filter(val => val).length === requiredList.length && !newValues.some(v => !v));
      setValues(newValues);
    }
  };

  const [formElements] = useState(Array.from(formRef.current
    .querySelectorAll('input,select,button'))
    .filter(node => node.type !== 'hidden')
    .map((node) => {
      let index = -1;
      let required = false;
      if (node.dataset.required === '1') {
        index = requiredList.length;
        requiredList.push(node.name);
        required = true;
      }
      let type = 'input';
      if (node.tagName === 'SELECT') {
        type = 'select';
      } else if (node.type === 'submit') {
        type = 'button';
      }
      return {
        key: node.name || node.id,
        index,
        node,
        type,
        placeholder: node.placeholder,
        defaultValue: node.value,
        required,
        label: (node.parentNode.querySelector('label') || { textContent: node.placeholder || '' }).textContent.replace(' *', ''),
        values: type === 'select' && Array.from(node.querySelectorAll('option'))
          .filter((_, i) => i > 0)
          .map((n, i) => ({ value: i === 0 ? '' : n.value || '', label: n.text })),
      };
    }),
  );

  return (
    <React.Fragment>

      { formElements.map(({ key, node, index, ...props }) => <Field
        key={key}
        valid={valid}
        onClick={props.type === 'button' ? onClick(node, index) : null}
        onChange={props.type !== 'button' ? onChange(node, index) : null}
        {...props}
      >
        {props.type === 'button' && button}
      </Field>) }

      { !!formElements.length && <Typography variant="caption">
        By clicking the &quot;{button}&quot; button you agree we may process your data in accordance with our <Link color="secondary" href="https://prospero.digital/policies/qiQdqu4cmFgurhCLE" target="_blank">privacy policy</Link>, and provide us with consent to send you email marketing in the future. You don&apos;t have to provide consent to our emails, and you can still read the free report without completing the form and clicking <Link color="secondary" href="mailto:paul.sutton@candt.org">here.</Link>
      </Typography> }

    </React.Fragment>
  );

};

Fields.displayName = 'Fields';

export default Fields;
