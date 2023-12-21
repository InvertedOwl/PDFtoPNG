const { convertPDF } = require('pdf2image');



convertPDF(__dirname + "/pdf.pdf", {                
    outputType: 'png',
    outputPath: "./",
    pages: '1'
});
