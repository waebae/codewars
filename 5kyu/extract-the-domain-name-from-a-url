//I forgot that string.replace() was a function...

function getPosition(string, subString, index) {
    return string.split(subString, index).join(subString).length;
  }
function domainName(url){
    if(url.includes('https://')||url.includes('http://')){
        let httpsEnding=getPosition(url,"/",2)
        url=url.slice(httpsEnding+1)
        // console.log(url)
    }
    if(url.includes('www')){
        let isThereAPeriodAfterWWW=url.charAt(url.indexOf('w',2)+1)
        if(isThereAPeriodAfterWWW=='.'){
            url=url.slice((url.indexOf('w',2)+2))
        }
        // console.log(url)
    }
    if(url.includes('.')){
        let dot=url.indexOf('.')
        url=(url.slice(0,dot))
        return(url)
    }
}
domainName('www.google.com')
domainName('https://google.com')