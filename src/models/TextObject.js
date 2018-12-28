const randomWord = require("random-words");
class TextObject{
    constructor(name, text, language)
    {
        this.name = name;
        if(Array.isArray(text))
        {
            var arr = [];
            for(var i = 0; i < text.length; i++)
            {
                if(text[i].includes(" "))
                {
                    arr.push(text[i].split(" "));
                }
                else
                {
                    arr.push(text[i]);
                } 
            }
            this.text = arr;
        }
        else
            this.text = text.split(" ");
        this.array = text;
        this.language = language;
    }
    static randomTextObject()
    {
        return new TextObject("random", randomWord({min: 15, max: 30}), "EN");
    }
}
export default TextObject;