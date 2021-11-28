import Swal from 'sweetalert2';

export const ThemedAlert = Swal.mixin({
  customClass: {
    container: '',
    popup: 'alert-container',
    header: '',
    title: 'alert-title',
    closeButton: '',
    icon: '',
    image: '',
    content: '',
    htmlContainer: '',
    input: '',
    inputLabel: '',
    validationMessage: '',
    actions: '',
    confirmButton: 'btn btn-confirm',
    denyButton: '',
    cancelButton: '',
    loader: '',
    footer: '',
  },
  buttonsStyling: false,
});
