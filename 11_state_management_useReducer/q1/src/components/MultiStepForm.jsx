import { useReducer } from "react";
import { formReducer, initialState } from "../reducer/formReducer";

const MultiStepForm = () => {
  const [state, dispatch] = useReducer(formReducer, initialState);

  const { step, formData, isSubmitted } = state;

  const handleChange = (e) => {
    dispatch({
      type: "UPDATE_FIELD",
      field: e.target.name,
      value: e.target.value,
    });
  };

  const next = () => dispatch({ type: "NEXT_STEP" });
  const back = () => dispatch({ type: "PREVIOUS_STEP" });
  const submit = () => dispatch({ type: "SUBMIT_FORM" });
  const reset = () => dispatch({ type: "RESET_FORM" });

  if (isSubmitted) {
    return (
      <div>
        <h2>✅ Registration Successful</h2>
        <button onClick={reset}>Register Again</button>
      </div>
    );
  }

  return (
    <div style={{ border: "1px solid #ccc", padding: "20px", width: "300px" }}>
      <p>Step {step} / 3</p>

      {step === 1 && (
        <>
          <h3>Personal Details</h3>
          <input
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
          />
          <br /><br />
          <input
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
          />
          <br /><br />
          <button
            disabled={!formData.name || !formData.email}
            onClick={next}
          >
            Next
          </button>
        </>
      )}

      {step === 2 && (
        <>
          <h3>Account Details</h3>
          <input
            name="username"
            placeholder="Username"
            value={formData.username}
            onChange={handleChange}
          />
          <br /><br />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
          />
          <br /><br />
          <button onClick={back}>Back</button>
          <button
            disabled={!formData.username || !formData.password}
            onClick={next}
          >
            Next
          </button>
        </>
      )}

      {step === 3 && (
        <>
          <h3>Review & Submit</h3>
          <p><strong>Name:</strong> {formData.name}</p>
          <p><strong>Email:</strong> {formData.email}</p>
          <p><strong>Username:</strong> {formData.username}</p>

          <button onClick={back}>Back</button>
          <button onClick={submit}>Submit</button>
        </>
      )}
    </div>
  );
};

export default MultiStepForm;
