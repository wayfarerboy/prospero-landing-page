import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ButtonBase from '@material-ui/core/ButtonBase';

const useStyles = makeStyles(theme => ({
  wrapper: {
    width: '100%',
    height: 0,
    paddingTop: '100%',
    position: 'relative',
  },
  thumb: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    objectFit: 'contain',
  },
}));

const Thumbnail = ({ thumbnail, download }) => {
  const classes = useStyles();
  const onClick = () => window.location = download;
  return (
    <div className={classes.wrapper}>
      <ButtonBase onClick={onClick} className={classes.thumb}>
        <img className={classes.thumb} src={thumbnail} alt="Thumbnail" />
      </ButtonBase>
    </div>
  );
};

Thumbnail.displayName = 'Thumbnail';

export default Thumbnail;
