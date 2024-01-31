import s from "./Filter.module.css";

export default function Filter({
  filterBySale,
  sort,
  filterByPrice,
  sale,
  handleChange,
}) {
  
  return (
    <div className={s.filter_wrapper}>
      <div className={s.wrapper}>
        <div className={s.filter_price}>
          <p>Price</p>
          <form className={s.filter_form}>
            <input
              type="number"
              placeholder="from"
              name="min_price"
              onChange={filterByPrice}
            />
            <input
              type="number"
              placeholder="to"
              name="max_price"
              onChange={filterByPrice}
            />
          </form>
        </div>

        {sale ? (
          ""
        ) : (
          <div className={s.filter_sale}>
            <p>Discounted items</p>
            <span className={s.span_input}>
              <input
                type="checkbox"
                name="checkbox"
                onClick={handleChange}
                onChange={filterBySale}
                className={s.checked}
              />
            </span>
          </div>
        )}
      </div>

      <div className={s.sort}>
        <p>Sorted</p>
        <select
          defaultValue={{ value: "default" }}
          onChange={sort}
          className={s.filter_select}
        >
          <option value="default">by default</option>
          <option value="1">price: low-high</option>
          <option value="2">price: high-low</option>
          <option value="3">by name</option>
        </select>
      </div>
    </div>
  );
}
