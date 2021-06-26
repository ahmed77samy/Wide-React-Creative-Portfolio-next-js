let spliting = [];

function SplitText(target) {
    this.ele = target.innerHTML;

    this.split = () => {
        ////////// check split or no //////////
        if (!spliting.some((e) => e === target)) {
            let spliter = this.ele.replaceAll("<br>", " * ").split("");
            let joiner = spliter.map((e) => {
                return (e =
                    e === "*"
                        ? "<br>"
                        : `<span style="position: relative">${e}</span>`);
            });
            target.innerHTML = joiner.join("");
            spliting.push(target);
        }
    };

    this.chars = () => {
        let nodes = target.childNodes;
        return [...nodes];
    };

    this.revert = () => {
        target.innerHTML = this.ele;
        spliting = spliting.filter((e) => {
            return e !== target;
        });
    };
}

export default SplitText;
