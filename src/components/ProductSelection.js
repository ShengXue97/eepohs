import React from 'react';

import { get } from 'libraries/utils/fetch';
import consts from 'consts';

function ProductSelection() {
  const [item, setItem] = React.useState({ name: '' });
  const [searchItems, setSearchItems] = React.useState({});

  // Shopee search API -- get items using search keyword
  React.useEffect(() => {
    (async () => {
      const getSearchResponse = await get(`${consts.API_URL}item/search`, {
        keyword: `enter keyword here`,
        offset: 0,
        limit: 20,
      });
      setSearchItems(getSearchResponse.data.items);
    })();
  });

  // Get info of one item using its item and shop id
  React.useEffect(() => {
    (async () => {
      const getInfoResponse = await get(`${consts.API_URL}item/get_info`, {
        item_id: 7327319319,
        shop_id: 92567513,
      });
      console.log(getInfoResponse);
      setItem(getInfoResponse.data);
    })();
  }, []);

  return (
    <div>
      <div>Item name: {item && item.name}</div>
      <div>
        {searchItems.map((searchItem) => (
          <div>{searchItem.name}</div>
        ))}
      </div>
    </div>
  );
}

export default ProductSelection;