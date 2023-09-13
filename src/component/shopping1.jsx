

const Shopping1 = () => {
    return (
        <div className='p-4'>
            <div className="navbar bg-base-100">
  <div className="flex-1">
    <a className="btn btn-ghost normal-case text-xl">Shopping</a>
  </div>
  <div className="flex-none">
    <ul className="menu menu-horizontal px-1">
      <li><a>Product</a></li>
      <li>
        <details>
          <summary>
            more
          </summary>
          <ul className="p-2 bg-base-100">
            <li><a>Facebook</a></li>
            <li><a>Whatsapp</a></li>
          </ul>
        </details>
      </li>
    </ul>
  </div>
</div>
        </div>
    );
};

export default Shopping1;