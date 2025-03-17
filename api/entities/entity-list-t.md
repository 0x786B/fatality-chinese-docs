# 📦 entity_list_t

`entity_list_t`代表的实体列表

> 如果你不知道自己在做什么，切勿保存从此列表获取的任何实体！你可能会留下空指针，这将会导致崩溃。

_________________

### for_each

[![方法][这是一个方法，必须使用冒号(:)来调用。]rw]

遍历实体。

**参数**

| 名称 | 类型 | 描述 |
| ---- | ---- | ----------- |
| `fn` | [`function(entity_entry_t)`](/api/entities/entity-list-t/entity-entry-t.md) | 回调函数。 |

无返回值

**示例**

```lua
entities.players:for_each(function (entry)
    -- ...
end);
```

### for_each_z

[![方法][这是一个方法，必须使用冒号(:)来调用。]rw]

按相反顺序遍历实体。

**参数**

| 名称 | 类型 | 描述 |
| ---- | ---- | ----------- |
| `fn` | [`function(entity_entry_t)`](/api/entities/entity-list-t/entity-entry-t.md) | 回调函数。 |

无返回值

**示例**

```lua
entities.players:for_each_z(function (entry)
    -- ...
end);
```