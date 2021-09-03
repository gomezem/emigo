import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import { blue } from '@material-ui/core/colors';

const useStyles = makeStyles({
  avatar: {
    backgroundColor: blue[100],
    color: blue[600],
  },
});


function SimpleDialog(props) {
  const classes = useStyles();
  const { onClose, selectedValue, open } = props;

  const handleClose = () => {
    onClose(selectedValue);
  };

  return (
      <div>
        {/* <head>
            <link rel="import" href="../projects/snakegame/index.html"></link>
        </head>
        <script src="../projects/snakegame/snake.js"></script> */}

        
    <Dialog onClose={handleClose} aria-labelledby="simple-dialog-title" open={open}>
        {/* <iframe src="../projects/snakegame/index.html" title="snakegame"></iframe>  */}
\        <DialogTitle id="simple-dialog-title">Snake Game</DialogTitle>
    </Dialog>
    </div>
  );
}

SimpleDialog.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
};

export default function SimpleDialogDemo() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (value) => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Learn More
      </Button>
      <SimpleDialog open={open} onClose={handleClose} />
    </div>
  );
}