const AdmZip = require('adm-zip');
const path = require('path');

async function createZip() {
    try {
        const zip = new AdmZip();
        const folderPath = path.join(__dirname, '../../test-portfolio');
        const outputPath = path.join(__dirname, '../../test-portfolio.zip');

        console.log(`Zipping folder: ${folderPath}`);
        zip.addLocalFolder(folderPath);
        zip.writeZip(outputPath);
        console.log(`✅ Successfully created: ${outputPath}`);
    } catch (error) {
        console.error('❌ Error creating zip:', error);
    }
}

createZip();
