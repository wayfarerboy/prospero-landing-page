import React, { useRef, useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';

import Fields from './Fields.jsx';

const useStyles = makeStyles(theme => ({
  wrapper: {
    margin: theme.spacing(0, 2),
  },
  form: {
    display: 'none',
  },
  loading: {
    width: '100%',
    textAlign: 'center',
    padding: theme.spacing(4),
  },
}));

const Form = ({ formId }) => {

  const formRef = useRef();
  const classes = useStyles();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const observer = new MutationObserver((_, obs) => {
      setLoading(false);
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
  }, [formRef, setLoading, formId]);

  return (
    <div className={classes.wrapper}>
      { loading && <div className={classes.loading}>
        <CircularProgress />
      </div> }
      <div ref={formRef} className={classes.form}>
        <div id={`form_${formId}`} />
      </div>
      { !loading && <Fields formRef={formRef} formId={formId} /> }
    </div>
  );
};

Form.displayName = 'Form';

export default Form;
