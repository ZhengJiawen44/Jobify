import styled from "styled-components";

const Wrapper = styled.section`
  .overlay {
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: -1;
    opacity: 0;
    transition: var(--transition);
    visibility: hidden;
  }

  .show-overlay {
    z-index: 99;
    opacity: 1;
    visibility: visible;
  }

  .popup {
    width: 400px;
    height: 200px;
    background-color: var(--background-color);
    border-radius: 1.5rem;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    color: var(--text-secondary-color);
    gap: 20px;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: fixed;
  }
  .message-container {
    justify-self: center;
    align-self: center;
    grid-column-start: 1;
    grid-column-end: 3;
  }
  .message {
    margin-top: 60px;
  }
  .delete-btn {
    background-color: white;
    color: var(--grey-800);
  }
  button {
    justify-self: center;
    align-self: center;
    width: 80px;
    height: 30px;
  }
  Form {
    justify-self: center;
    align-self: center;
    width: 80px;
    height: 30px;
  }
`;

export default Wrapper;
