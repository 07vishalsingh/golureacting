

function Student(props) {
    return (
        <div className="student">
            <p>Name:{props.name}</p>
            <p>Age:{props.age}</p>
            <p>Student:{props.isStudent ? "yes" : "No"}</p>
            <p>Mobile:{props.mobile}</p>
            <p>Pin:{props.pin}</p>
            <p>Indian:{props.isIndian ? "yes" : "No"}</p>
        </div>
    );
}


export default Student