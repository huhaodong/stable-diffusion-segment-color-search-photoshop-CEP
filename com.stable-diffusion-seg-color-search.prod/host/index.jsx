if(typeof($)=='undefined')
	$={}

$._ext = {
    //Evaluate a file and catch the exception.
    evalFile : function(path) {
        try {
            $.evalFile(path);
        } catch (e) {alert("Exception:" + e)}
    },
    // Evaluate all the files in the given folder
    evalFiles: function(jsxFolderPath) {
        var folder = new Folder(jsxFolderPath)
        if (folder.exists) {
            var jsxFiles = folder.getFiles("*.jsx")
            for (var i = 0; i < jsxFiles.length; i++) {
                var jsxFile = jsxFiles[i]
                $._ext.evalFile(jsxFile)
            }
        }
    }
}

// // fileName is a String (with the .jsx extension included)
// function loadJSX(fileName) {
//     var csInterface = new CSInterface();
//     var extensionRoot = csInterface.getSystemPath(SystemPath.EXTENSION) + "/jsx/";
//     csInterface.evalScript('$.evalFile("' + extensionRoot + fileName + '")');
// }



var changeForegroundColor = function (colorHex) {
    
    // alert("get in host:"+colorHex);
    var solidColorRef = new SolidColor();
    solidColorRef.rgb.hexValue = colorHex;
    app.foregroundColor = solidColorRef;
}