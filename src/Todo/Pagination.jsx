const Pagination = ({ currentPage, handlePage }) => {
  return (
    <>
      {currentPage === 1 ? (
        <button disabled>Prev</button>
      ) : (
        <button
          onClick={() => {
            handlePage(currentPage - 1);
          }}
        >
          Prev
        </button>
      )}
      <strong>{currentPage}</strong>
      <button
        onClick={() => {
          handlePage(currentPage + 1);
        }}
      >
        Next
      </button>
    </>
  );
};

export default Pagination;
