// Generated by https://quicktype.io

export interface AdminUserResponse {
    content:          AdminUser[];
    pageable:         Pageable;
    last:             boolean;
    totalPages:       number;
    totalElements:    number;
    size:             number;
    number:           number;
    sort:             Sort;
    first:            boolean;
    numberOfElements: number;
    empty:            boolean;
}

export interface AdminUser {
    id:          string;
    nickname:    string;
    descripcion: string;
    foto:        string;
    admin:       boolean;
}

export interface Pageable {
    sort:       Sort;
    offset:     number;
    pageNumber: number;
    pageSize:   number;
    paged:      boolean;
    unpaged:    boolean;
}

export interface Sort {
    empty:    boolean;
    sorted:   boolean;
    unsorted: boolean;
}
