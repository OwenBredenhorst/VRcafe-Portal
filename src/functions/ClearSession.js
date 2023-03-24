import toast from "react-hot-toast";

export default function sessionClear() {
    toast.success('Successfully logged out' , {
        style: {
            border: '1px solid #713200',
            padding: '16px',
            backgroundColor: '#2D2A2F',
            color: 'white',
        },
        iconTheme: {
            primary: '#FD3E81',
            secondary: 'white',
        },
    });


    setTimeout(() => {
        sessionStorage.clear()

        window.location.href = "/login";
    }, 1000);

}