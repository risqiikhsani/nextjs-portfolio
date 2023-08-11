"use client";

import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';



import {
    ReactNode,
    createContext,
    useContext,
    useState
} from "react";

export interface IAppContext {

    CreateOpenToastModal: (title: string, text: string) => void;
}


const appContextDefaultValues: IAppContext = {

    CreateOpenToastModal: (title: string, text: string) => { },
};

export const Context = createContext<IAppContext>(appContextDefaultValues);

export function useAppContext() {
    return useContext(Context);
}

interface Props {
    children: ReactNode;
}



export function AppContextHandler({ children }: Props) {

    const [open, setOpen] = useState(false)
    const [title, setTitle] = useState("")
    const [text, setText] = useState("")

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const CreateOpenToastModal = (title: string, text: string) => {
        setTitle(title)
        setText(text)
        handleClickOpen()
    }


    const value = {
        CreateOpenToastModal,
    };




    return (
        <>
            <Context.Provider value={value}>
                {children}
                <Dialog
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                >
                    <DialogTitle id="alert-dialog-title">
                        {title}
                    </DialogTitle>
                    <DialogContent>
                        <DialogContentText id="alert-dialog-description">
                            {text}
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleClose}>Close</Button>
                    </DialogActions>
                </Dialog>
            </Context.Provider>
        </>
    );
}