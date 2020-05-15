import './ckeditor';

export default function createTextEditor(el) {
  return window.InlineEditor.create( el, {
          toolbar: {
            items: [
              'heading',
              '|',
              'fontFamily',
              'fontSize',
              'bold',
              'italic',
              'link',
              'bulletedList',
              'numberedList',
              '|',
              'indent',
              'outdent',
              '|',
              'blockQuote',
              'undo',
              'redo',
              'highlight',
              'alignment'
            ]
          },
          language: 'en',
          licenseKey: '',
        } );
}


