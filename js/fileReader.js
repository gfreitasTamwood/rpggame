class FileReader {
    #url = "";

    constructor(url){
        this.#url = url;
    }

    readFile(){
        let xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function(){
            let result = null;
            try {
                if(xhttp.readyState === 4 && xhttp.status === 200) {
                    result = JSON.parse(xhttp.responseText);
                } else {
                    throw new Error("Sorry! File not Found-1");
                }

            } catch(error){
                console.error(error);
            }
        }    
        
        xhttp.open("GET",this.#url,true);
        xhttp.send();

        return result;
    }

    getUrl(){
        return this.#url;
    }
}
export default FileReader;