export interface TikWmVideoData {
    code: number;
    msg: string;
    processed_time: number;
    data: {
        id: string;
        region: string;
        title: string;
        cover: string;
        duration: number;
        play: string;
        wmplay: string;
        hdplay: string;
        size: number;
        wm_size: number;
        hd_size: number;
        music: string;
        music_info: {
            id: string;
            title: string;
            play: string;
            author: string;
            original: boolean;
            duration: number;
            album: string;
        };
        play_count: number;
        digg_count: number;
        comment_count: number;
        share_count: number;
        download_count: number;
        collect_count: number;
        create_time: number;
        anchors: any | null;
        anchors_extras: string;
        is_ad: boolean;
        commerce_info: {
            adv_promotable: boolean;
            auction_ad_invited: boolean;
            branded_content_type: number;
            with_comment_filter_words: boolean;
        };
        commercial_video_info: string;
        item_comment_settings: number;
        author: {
            id: string;
            unique_id: string;
            nickname: string;
            avatar: string;
        };
    };
}
